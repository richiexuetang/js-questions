(() => {
    function progressBar($rootElement, initialValue) {
        const MIN = 0;
        const MAX = 100;
        $rootElement.classList.add('progress');

        const $progressBarEl = document.createElement('div');
        $progressBarEl.classList.add('progress-bar');

        $progressBarEl.setAttribute('role', 'progressbar');
        $progressBarEl.setAttribute('aria-valuemin', MIN);
        $progressBarEl.setAttribute('aria-valuemax', MAX);

        function setValue(value) {
            const clampedValue = Math.min(Math.max(value, MIN), MAX);

            $progressBarEl.style.width = `${clampedValue}%`;
            $progressBarEl.textContent = `${clampedValue}%`;
            $progressBarEl.setAttribute('aria-valuenow', clampedValue);
        }

        $rootElement.appendChild($progressBarEl);
        setValue(initialValue);

        return {
            setValue,
        };
    }

    const progressSlider = progressBar(document.querySelector('#progress-slider'), 50);
    document.querySelector('#slider').addEventListener('change', (event) => {
        progressSlider.setValue(event.target.value);
    });
})();