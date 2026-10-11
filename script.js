
        const slides = [
            "From first call to final install, every job in one place.",
            "Streamline scheduling and field crew dispatching seamlessly.",
            "Track live job statuses and progress reports in real time.",
            "Manage material inventories and subcontractor assignments easily.",
            "Centralize client notes, measurements, and fabrication schedules.",
            "Built specifically for stone contractors and custom installers.",
            "Coordinate office workflows and mobile crews with precision.",
            "Access architectural drawings and job histories instantly."
        ];

        function switchSlide(index) {
            const headlineEl = document.getElementById('carousel-text');
            const buttons = document.querySelectorAll('.dash-btn');

            headlineEl.style.opacity = '0';
            setTimeout(() => {
                headlineEl.textContent = slides[index];
                headlineEl.style.opacity = '1';
            }, 150);

            buttons.forEach((btn, i) => {
                if (i === index) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        function togglePassword() {
            const pwdInput = document.getElementById('password');
            const toggleBtn = document.getElementById('toggle-btn');
            if (pwdInput.type === 'password') {
                pwdInput.type = 'text';
                toggleBtn.textContent = 'Hide';
            } else {
                pwdInput.type = 'password';
                toggleBtn.textContent = 'Show';
            }
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-btn');
            const btnText = document.getElementById('btn-text');
            const spinner = document.getElementById('btn-spinner');
            const identity = document.getElementById('identity').value;
            const banner = document.getElementById('feedback-banner');

            submitBtn.disabled = true;
            btnText.textContent = "Signing in...";
            spinner.style.display = 'block';
            banner.style.display = 'none';

            setTimeout(() => {
                submitBtn.disabled = false;
                spinner.style.display = 'none';
                btnText.textContent = "Sign in";

                banner.className = "feedback-banner success";
                banner.textContent = `Welcome back! Signed in as ${identity}.`;
            }, 1000);
        }

        function triggerForgotPassword() {
            const banner = document.getElementById('feedback-banner');
            banner.className = "feedback-banner info";
            banner.textContent = "Please contact your ACUE Job Desk administrator or office manager to reset your credentials.";
        }
  
