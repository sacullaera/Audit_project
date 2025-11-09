# scripts/setup.sh
#!/bin/bash
# Script de inicialização segura do projeto

echo "=== Configurando ambiente seguro para o projeto de autoauditoria ==="

# Verificar se o Python está instalado
if ! command -v python3 &> /dev/null; then
    echo "Python3 não encontrado. Por favor, instale o Python3 primeiro."
    exit 1
fi

# Verificar se o pip está instalado
if ! command -v pip3 &> /dev/null; then
    echo "pip3 não encontrado. Por favor, instale o pip3 primeiro."
    exit 1
fi

# Criar ambiente virtual
echo "Criando ambiente virtual..."
python3 -m venv .venv

# Ativar ambiente virtual
echo "Ativando ambiente virtual..."
source .venv/bin/activate

# Instalar dependências
echo "Instalando dependências..."
pip install -r requirements.txt

# Gerar chave secreta segura para Django
echo "Gerando chave secreta segura..."
SECRET_KEY=$(python -c 'import random, string; print("".join(random.SystemRandom().choice(string.ascii_letters + string.digits + string.punctuation) for _ in range(50)))')

# Criar arquivo .env com configurações seguras
echo "Criando arquivo de configuração .env..."
cat > .env << EOF
# Configurações de segurança
DJANGO_SECRET_KEY=$SECRET_KEY
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

# Configurações de banco de dados
DATABASE_URL=sqlite:///db.sqlite3

# Configurações de segurança adicionais
DJANGO_SECURE_SSL_REDIRECT=False
DJANGO_SESSION_COOKIE_SECURE=False
DJANGO_CSRF_COOKIE_SECURE=False

# Configurações de email (desenvolvimento)
DJANGO_EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
EOF

# Aplicar migrações do banco de dados
echo "Aplicando migrações do banco de dados..."
python manage.py migrate

# Criar superusuário
echo "Criando superusuário para administração..."
python manage.py createsuperuser --email admin@autoauditoria.local --noinput || echo "Já existe um superusuário com este email."

# Coletar arquivos estáticos
echo "Coletando arquivos estáticos..."
python manage.py collectstatic --noinput

echo ""
echo "=== Configuração concluída com sucesso! ==="
echo ""
echo "Para iniciar o servidor de desenvolvimento:"
echo "1. Ative o ambiente virtual: source .venv/bin/activate"
echo "2. Inicie o servidor: python manage.py runserver"
echo ""
echo "Acesse o admin em: http://127.0.0.1:8000/admin/"
echo "Credenciais do superusuário:"
echo "  Email: admin@autoauditoria.local"
echo "  Senha: Defina uma senha segura com o comando: python manage.py changepassword admin@autoauditoria.local"
echo ""