navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        navTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Hide all tab contents
        Object.values(tabContents).forEach(content => {
            content.classList.add('hidden');
        });
        
        // Show selected tab content
        const tabId = tab.getAttribute('data-tab');
        if (tabContents[tabId]) {
            // CORRECTED LINE - removed the extra ".class"
            tabContents[tabId].classList.remove('hidden');
            
            // Initialize BMI chart when BMI tab is opened
            if (tabId === 'bmiTab' && userData.bmiChart) {
                initBmiChart();
            }
            
            // Create wheel when rewards tab is opened
            if (tabId === 'rewardsTab') {
                createFortuneWheel();
            }
            
            // Load inventory when inventory tab is opened
            if (tabId === 'inventoryTab') {
                loadInventoryPage();
            }
        }
    });
});