// ========================= script.js =========================
const DEMO_USER = {
	username: 'aluno',
	password: 'fatec123'
};
const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('loginForm');
const feedback = document.getElementById('feedback');
const toggle = document.getElementById('togglePwd');
const demoBtn = document.getElementById('demoBtn');
const submitBtn = document.getElementById('submitBtn');
const stepLogin = document.getElementById('step-login');
const stepNext = document.getElementById('step-next');
const continueBtn = document.getElementById('continueBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Recuperar usuário lembrado
if (localStorage.getItem('rememberedUsername')) {
	username.value = localStorage.getItem('rememberedUsername');
	el('remember').checked = true;
}

// Mostrar / ocultar senha
toggle.addEventListener('click', () => {
	const pwdType = password.type === 'password' ? 'text' : 'password';
	password.type = pwdType;
	toggle.textContent = pwdType === 'password' ? 'Mostrar' : 'Ocultar';
});

// Login
form.addEventListener('submit', (e) => {
	e.preventDefault();
	clearFeedback();
	submitBtn.disabled = true;
	submitBtn.textContent = 'Verificando...';

	const u = username.value.trim();
	const p = password.value;

	if (u.length < 3) {
		showError('O nome de usuário deve ter ao menos 3 caracteres.');
		resetBtn();
		return;
	}
	if (p.length < 6) {
		showError('A senha deve ter ao menos 6 caracteres.');
		resetBtn();
		return;
	}

	setTimeout(() => {
		if (u === DEMO_USER.username && p === DEMO_USER.password) {
			onLoginSuccess(u);
		} else {
			showError('Usuário ou senha inválidos.');
			resetBtn();
		}
	}, 700);
});

// Login demo
demoBtn.addEventListener('click', () => {
    window.location.href = '/demo-login/';
});

// Logout (ainda na tela inicial)
logoutBtn.addEventListener('click', () => {
	password.value = '';
	showLogin();
});

function onLoginSuccess(user) {
	showSuccess('Bem-vindo, ' + user + '!');
	if (el('remember').checked) {
		localStorage.setItem('rememberedUsername', user);
	} else {
		localStorage.removeItem('rememberedUsername');
	}

	// Redireciona para a dashboard (nova página)
	setTimeout(() => {
		window.location.href = 'dashboard.html';
	}, 800);
}

// Funções auxiliares
function showError(msg) {
	feedback.innerHTML = `<div class="error">${escapeHtml(msg)}</div>`;
}

function showSuccess(msg) {
	feedback.innerHTML = `<div class="success">${escapeHtml(msg)}</div>`;
}

function clearFeedback() {
	feedback.innerHTML = '';
}

function resetBtn() {
	submitBtn.disabled = false;
	submitBtn.textContent = 'Entrar';
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
    }[c]));
}

function showLogin() {
    stepNext.style.display = 'none';
    stepLogin.style.display = 'block';
}

window.__authDemo = {
    isLoggedIn() {
        return stepNext.style.display === 'block';
    },
    logout() {
        logoutBtn.click();
    }
};
