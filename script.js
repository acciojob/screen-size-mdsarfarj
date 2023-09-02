//your JS code here. If required.
 function updateWindowSize() {
            const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            // Update the content with the current window size
            document.getElementById('width').textContent = width;
            document.getElementById('height').textContent = height;
        }

        // Initial call to set the window size
        updateWindowSize();

        // Attach an event listener to update the size whenever the window is resized
        window.addEventListener('resize', updateWindowSize);
        // Attach an event listener to update the size whenever the window is resized
        window.addEventListener('resize', updateWindowSize);
