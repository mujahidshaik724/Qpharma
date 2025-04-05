document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("trainingCardContainer");
    const popup = document.getElementById("popupForm");
    const closeBtn = document.getElementById("closePopup");
    const courseTitle = document.getElementById("courseTitle");
    const selectedCourse = document.getElementById("selectedCourse");
  
    fetch('../courses.json')
      .then(res => res.json())
      .then(courses => {
        courses.forEach(course => {
          const card = document.createElement("div");
          card.className = "trainingCard";
          card.innerHTML = `
            <div class="content"><h3>${course.title}</h3>
            <p>${course.description}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Mode:</strong> ${course.mode}</p>
            <p><strong>Start Date:</strong> ${course.startDate}</p>
            <p><strong>Trainer:</strong> ${course.trainer}</p>
            <p><strong>Topics:</strong> ${course.topics.join(", ")}</p></div>
            <div><button class="applyBtn">Apply</button></div
          `;
          container.appendChild(card);
  
          card.querySelector(".applyBtn").addEventListener("click", () => {
            popup.classList.remove("hidden");
            document.body.style.overflow = "hidden"; // Lock background
            courseTitle.textContent = course.title;
            selectedCourse.value = course.title;
          });
        });
      });
  
    const closePopup = () => {
      popup.classList.add("hidden");
      document.body.style.overflow = ""; // Unlock scroll
    };
  
    closeBtn.addEventListener("click", closePopup);
  
    // Close popup when clicking outside formContent
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        closePopup();
      }
    });
  
    document.getElementById("applicationForm").addEventListener("submit", e => {
      e.preventDefault();
      const form = e.target;
  
      const data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        qualification: form.qualification.value,
        experience: form.experience.value,
        mode: form.mode.value,
        message: form.message.value,
        course: form.course.value
      };
  
      console.log("Form Submitted:", data);
      alert(`Application submitted for ${data.course}`);
      closePopup();
      form.reset();
    });
  });
  