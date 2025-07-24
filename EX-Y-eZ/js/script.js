document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const signupForm = document.getElementById('user-signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const interestsCheckboxes = document.querySelectorAll('input[name="interests"]:checked');
            
            // Create interests array
            const interests = [];
            interestsCheckboxes.forEach(checkbox => {
                interests.push(checkbox.value);
            });
            
            // Create user data object
            const userData = {
                name: name,
                email: email,
                interests: interests,
                date: new Date().toISOString()
            };
            
            // Save user data (in a real app, this would be sent to a server)
            localStorage.setItem('userData', JSON.stringify(userData));
            
            // Show success message
            document.getElementById('user-signup-form').style.display = 'none';
            document.getElementById('signup-success').classList.remove('hidden');
            
            console.log('User signed up:', userData);
        });
    }
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop();
        
        if ((currentPage === '' && linkHref === 'index.html') || 
            (currentPage && linkHref && currentPage.includes(linkHref))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and content
                document.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Add active class to current tab and content
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Activate first tab by default
        if (tabButtons.length > 0) {
            tabButtons[0].click();
        }
    }
    
    // Filter functionality for exams and colleges
    const categoryFilters = document.querySelectorAll('.filter-checkbox[data-filter="category"]');
    const regionFilters = document.querySelectorAll('.filter-checkbox[data-filter="region"]');
    const examFilters = document.querySelectorAll('.filter-checkbox[data-filter="exam"]');
    
    // Apply filters function
    function applyFilters() {
        // For Exams page
        const examItems = document.querySelectorAll('.exam-detail');
        if (examItems.length > 0) {
            const selectedCategories = getSelectedFilters('category');
            const selectedRegions = getSelectedFilters('region');
            
            examItems.forEach(exam => {
                const examCategory = exam.getAttribute('data-category');
                const examRegions = exam.getAttribute('data-regions') ? exam.getAttribute('data-regions').split(',') : [];
                
                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(examCategory);
                const regionMatch = selectedRegions.length === 0 || 
                                   examRegions.some(region => selectedRegions.includes(region));
                
                if (categoryMatch && regionMatch) {
                    exam.style.display = 'block';
                } else {
                    exam.style.display = 'none';
                }
            });
            
            updateResultCount('exam-detail');
        }
        
        // For Colleges page
        const collegeItems = document.querySelectorAll('.college-detail');
        if (collegeItems.length > 0) {
            const selectedCategories = getSelectedFilters('category');
            const selectedRegions = getSelectedFilters('region');
            const selectedExams = getSelectedFilters('exam');
            
            collegeItems.forEach(college => {
                const collegeCategory = college.getAttribute('data-category');
                const collegeRegion = college.getAttribute('data-region');
                const collegeExams = college.getAttribute('data-exams') ? college.getAttribute('data-exams').split(',') : [];
                
                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(collegeCategory);
                const regionMatch = selectedRegions.length === 0 || selectedRegions.includes(collegeRegion);
                const examMatch = selectedExams.length === 0 || 
                                 collegeExams.some(exam => selectedExams.includes(exam));
                
                if (categoryMatch && regionMatch && examMatch) {
                    college.style.display = 'block';
                } else {
                    college.style.display = 'none';
                }
            });
            
            updateResultCount('college-detail');
        }
    }
    
    // Get selected filters
    function getSelectedFilters(filterType) {
        const selected = [];
        document.querySelectorAll(`.filter-checkbox[data-filter="${filterType}"]:checked`).forEach(checkbox => {
            selected.push(checkbox.value);
        });
        return selected;
    }
    
    // Update result count
    function updateResultCount(itemClass) {
        const visibleItems = document.querySelectorAll(`.${itemClass}:not([style*="display: none"])`);
        const countElement = document.getElementById('result-count');
        if (countElement) {
            countElement.textContent = visibleItems.length;
        }
    }
    
    // Add event listeners to filters
    if (categoryFilters.length > 0 || regionFilters.length > 0 || examFilters.length > 0) {
        [...categoryFilters, ...regionFilters, ...examFilters].forEach(filter => {
            filter.addEventListener('change', applyFilters);
        });
        
        // Apply filters on page load
        applyFilters();
    }
    
    // Handle sorting functionality
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            const container = document.querySelector('.exam-list') || document.querySelector('.college-list');
            const items = document.querySelectorAll('.exam-detail') || document.querySelectorAll('.college-detail');
            
            const itemsArray = Array.from(items);
            
            // Sort the items based on the selected option
            itemsArray.sort((a, b) => {
                if (sortBy === 'name-asc') {
                    return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
                } else if (sortBy === 'name-desc') {
                    return b.getAttribute('data-name').localeCompare(a.getAttribute('data-name'));
                } else if (sortBy === 'category') {
                    return a.getAttribute('data-category').localeCompare(b.getAttribute('data-category'));
                } else if (sortBy === 'date') {
                    return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
                }
                return 0;
            });
            
            // Reappend the sorted items
            itemsArray.forEach(item => {
                container.appendChild(item);
            });
        });
    }
    
    // Show user preferences if they exist
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        const userPreferences = document.getElementById('user-preferences');
        if (userPreferences) {
            userPreferences.innerHTML = `
                <div class="user-welcome">
                    <h3>Welcome, ${userData.name}!</h3>
                    <p>Based on your interests in ${userData.interests.join(', ')}, we've highlighted relevant exams and colleges for you.</p>
                </div>
            `;
            userPreferences.style.display = 'block';
            
            // Highlight items matching user interests
            userData.interests.forEach(interest => {
                document.querySelectorAll(`[data-category="${interest}"]`).forEach(item => {
                    item.classList.add('user-interest-match');
                });
            });
        }
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            // For Exams page
            const examItems = document.querySelectorAll('.exam-detail');
            if (examItems.length > 0) {
                examItems.forEach(exam => {
                    const examName = exam.getAttribute('data-name').toLowerCase();
                    const examDesc = exam.querySelector('.exam-description') ? 
                                     exam.querySelector('.exam-description').textContent.toLowerCase() : '';
                    
                    if (examName.includes(searchTerm) || examDesc.includes(searchTerm)) {
                        exam.style.display = 'block';
                    } else {
                        exam.style.display = 'none';
                    }
                });
                
                updateResultCount('exam-detail');
            }
            
            // For Colleges page
            const collegeItems = document.querySelectorAll('.college-detail');
            if (collegeItems.length > 0) {
                collegeItems.forEach(college => {
                    const collegeName = college.getAttribute('data-name').toLowerCase();
                    const collegeDesc = college.querySelector('.college-description') ? 
                                       college.querySelector('.college-description').textContent.toLowerCase() : '';
                    
                    if (collegeName.includes(searchTerm) || collegeDesc.includes(searchTerm)) {
                        college.style.display = 'block';
                    } else {
                        college.style.display = 'none';
                    }
                });
                
                updateResultCount('college-detail');
            }
        });
    }
});