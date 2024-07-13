 // Load header.html into the #header-placeholder div
fetch('Assets/Component/Header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placer').innerHTML = data;
    });
// Load Footer.html
fetch('Assets/Component/Footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('AddFooter').innerHTML = data;
    });
// load SiderBar.html
fetch('Assets/Component/Sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('SideBar').innerHTML = data;
    });

// Load Card.html
fetch('Assets/Component/Card.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('cardBand').innerHTML = data;
    });

    document.addEventListener("DOMContentLoaded", function () {
        const contentDiv = document.getElementById('home');
        const cardHid = document.getElementById('cardBand');
        const maxRetries = 3; // Number of retries before refreshing
    
        function loadPage(page, retries = maxRetries) {
            const url = `pages/${page}.html`;
            console.log('Fetching:', url);
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Page not found');
                    }
                    return response.text();
                })
                .then(data => {
                    contentDiv.innerHTML = data;
                    updatePageTitle(page);
                    window.history.pushState({ page: page }, "", `?page=${page}`);
                })
                .catch(error => {
                    console.error('Error loading page:', error);
                    if (retries > 0) {
                        console.log(`Retrying... (${retries} retries left)`);
                        loadPage(page, retries - 1); // Retry loading the page
                    } else {
                        contentDiv.innerHTML = "<h1>Page not found</h1>";
                        updatePageTitle('Home');
                        window.history.pushState({ page: 'Home' }, "", "?page=Home");
                        setTimeout(() => {
                            location.reload(); // Refresh the page after retries
                        }, 2000); // Wait for 2 seconds before refreshing
                    }
                });
        }
    
        function updatePageTitle(page) {
            const cardTitle = document.getElementById('Card-title');
            const btnShowHide = document.getElementById('Button-show-hidd');
    
            switch (page) {
                case 'Home':
                    cardTitle.innerText = 'Rock Song ? Heavy Metal Song ?';
                    btnShowHide.hidden = true;
                    break;
                case 'Band':
                    cardTitle.innerText = 'วงดนตรีแนว Heavy Metal ที่แนะนำ';
                    btnShowHide.hidden = true;
                    break;
                case 'fir':
                    cardTitle.innerText = 'Falling in Reverse';
                    break;
                case 'bmth':
                    cardTitle.innerText = 'Bring Me The Horizon';
                    break;
                case 'act':
                    cardTitle.innerText = 'Architects';
                    break;
                case 'bvb':
                    cardTitle.innerText = 'Black Veil Brides';
                    break;
                default:
                    cardHid.hidden = true;
                    break;
            }
        }
    
        function getCurrentPage() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('page') || 'Home';
        }
    
        const page = getCurrentPage();
        loadPage(page);
    
        window.loadPage = loadPage; // Make loadPage function globally accessible
    });
    

////////////////////////////////////////////////////////////////////////////////////////////////

    // document.addEventListener("DOMContentLoaded", function () {
    //     const contentDiv = document.getElementById('home');
    //     const cardHid = document.getElementById('cardBand');
    //     // โหลดเพจขึ้นมา ถ้าโหลด Not found เกิน3ครั้ง แสดงว่าไม่มาหน้านั้นอยู่ หรือหายไป
    //     function loadPage(page, retries = 3) {
    //         const url = `pages/${page}.html`;
    //         console.log('Fetching:', url);
    //         fetch(url)
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error('Page not found');
    //                 }
    //                 return response.text();
    //             })
    //             .then(data => {
    //                 contentDiv.innerHTML = data;
    //                 const cardTitle = document.getElementById('Card-title');
    //                 const btnShowHide = document.getElementById('Button-show-hidd');
    //                 window.history.pushState({ page: page }, "", `?page=${page}`);
    
    //                 if (page === 'Home') {
    //                     cardTitle.innerText = 'Rock Song ? Heavy Metal Song ?';
    //                     btnShowHide.hidden = true;
    //                 } else if (page === 'Band') {
    //                     cardTitle.innerText = 'วงดนตรีแนว Heavy Metal ที่แนะนำ';
    //                     btnShowHide.hidden = true;
    //                 }
    //                 else if (page === 'fir') {
    //                     cardTitle.innerText = 'Falling in Reverse';
    //                 }
    //                 else if (page === 'bmth') {
    //                     cardTitle.innerText = 'Bring Me The Horizon';
    //                 }
    //                 else if (page === 'act') {
    //                     cardTitle.innerText = 'Architects';
    //                 }
    //                 else if (page === 'bvb') {
    //                     cardTitle.innerText = 'Black Veil Brides';
    //                 }
    //                  else {
    //                     cardHid.hidden = true;
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error('Error loading page:', error);
    //                 if (retries > 0) {
    //                     console.log(`Retrying... (${retries} retries left)`);
    //                     loadPage(page, retries - 1); // Retry loading the page
    //                 } else {
    //                     contentDiv.innerHTML = "<h1>Page not found</h1>";
    //                     loadPage('Home');
    //                 }
    //             });
    //     }
    //     function GetCurrentPage(x) {
    //         const urlShow = new URLSearchParams(window.location.search);
    //         return urlShow.get(x);
    //     }
    //     // Check the query parameter and load the respective page
    //     const page = GetCurrentPage('page');
    //     if (page) {
    //         loadPage(page);
    //     } else {
    //         // Load the default page (home.html)
    //         loadPage('Home');
    //     }
    //     // Make loadPage function globally accessible
    //     window.loadPage = loadPage;
    // });
    