fetch('../services.json')
            .then(response => response.json())
            .then(data => {
                const servicesContainer = document.getElementById('services-list');
                servicesContainer.innerHTML = data.map(service => `
                    <div class="service-card">
                        <img src="${service.image}" alt="${service.title}">
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                        <div class="btn">
                        <button><a href="${service.link}">Learn More</a></button>
                        </div>
                    </div>
                `).join('');
            })
            .catch(error => console.error('Error loading services:', error));