// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  
    // Post like functionality
    document.querySelectorAll('.post-action.like').forEach(button => {
      button.addEventListener('click', function() {
        const countElement = this.querySelector('.like-count');
        let count = parseInt(countElement.textContent);
        
        if (this.classList.contains('liked')) {
          count--;
          this.classList.remove('liked');
        } else {
          count++;
          this.classList.add('liked');
        }
        
        countElement.textContent = count;
      });
    });
  
    // Comment functionality
    document.querySelectorAll('.post-action.comment').forEach(button => {
      button.addEventListener('click', function() {
        const post = this.closest('.post');
        const commentSection = post.querySelector('.comments-section');
        
        if (commentSection.style.display === 'none' || !commentSection.style.display) {
          commentSection.style.display = 'block';
        } else {
          commentSection.style.display = 'none';
        }
      });
    });
  
    // Share functionality
    document.querySelectorAll('.post-action.share').forEach(button => {
      button.addEventListener('click', function() {
        // In a real app, this would open a share dialog
        alert('Share functionality would open here');
      });
    });
  
    // Read more functionality
    document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const content = this.previousElementSibling;
        
        if (content.classList.contains('expanded')) {
          content.classList.remove('expanded');
          this.textContent = 'READ MORE';
        } else {
          content.classList.add('expanded');
          this.textContent = 'READ LESS';
        }
      });
    });
  
    // Ask question form submission
    const questionForm = document.getElementById('ask-question-form');
    if (questionForm) {
      questionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = this.querySelector('#question-title').value;
        const description = this.querySelector('#question-description').value;
        const tags = this.querySelector('#question-tags').value;
        const link = this.querySelector('#question-link').value;
        
        // In a real app, this would send the data to a server
        console.log('Question submitted:', { title, description, tags, link });
        
        // Show success message
        alert('Your question has been submitted successfully!');
        this.reset();
      });
    }
  
    // Toggle sections in profile
    document.querySelectorAll('.profile-section-toggle').forEach(button => {
      button.addEventListener('click', function() {
        const section = this.closest('.profile-section');
        const content = section.querySelector('.profile-section-content');
        
        if (content.style.display === 'none' || !content.style.display) {
          content.style.display = 'block';
          this.textContent = this.textContent.replace('SHOW', 'HIDE');
        } else {
          content.style.display = 'none';
          this.textContent = this.textContent.replace('HIDE', 'SHOW');
        }
      });
    });
  });