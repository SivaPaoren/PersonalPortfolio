const modal = document.getElementById('imageModal');
        const modalContent = modal.querySelector('.modal-content');

        // Function to open modal
        function openModal(images) {
            // Clear existing content (except close button)
            modalContent.innerHTML = '<button class="modal-close" onclick="closeModal()">Close</button>';

            // Dynamically insert images into modal
            images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                modalContent.insertBefore(img, modalContent.firstChild);
            });

            // Display the modal
            modal.style.display = 'flex';
        }

        // Add event listener to project items
        document.querySelectorAll('.project-item').forEach(item => {
            item.addEventListener('click', () => {
                const images = item.getAttribute('data-images').split(',');
                openModal(images);
            });
        });

        // Function to close modal
        function closeModal() {
            modal.style.display = 'none';
        }

        // Close modal when clicking outside the content
        modal.addEventListener('click', closeModal);