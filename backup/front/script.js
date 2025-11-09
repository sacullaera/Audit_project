// ========================= script.js =========================
const DEMO_USER = {
	username: 'aluno',
	password: 'fatec123'
};
const el = id => document.getElementById(id);
const username = el('username');
const password = el('password');
const form = el('loginForm');
const feedback = el('feedback');
const toggle = el('togglePwd');
const demoBtn = el('demoBtn');
const submitBtn = el('submitBtn');
const stepLogin = el('step-login');
const stepNext = el('step-next');
const continueBtn = el('continueBtn');
const logoutBtn = el('logoutBtn');

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
	username.value = DEMO_USER.username;
	password.value = DEMO_USER.password;
	form.dispatchEvent(new Event('submit', {
		cancelable: true
	}));
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
