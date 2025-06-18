export function initSidebar() {
    const sidebar = document.getElementById("sidebar");
    let isInside = false;

    if(!(sidebar)) {
        return;
    }

    sidebar.addEventListener    ("mouseenter", () => {
        isInside = true;
        sidebar.classList.add("expanded");
    });

    sidebar.addEventListener("mouseleave", () => {
        isInside = false;
        setTimeout(() => {
            if (!(isInside)) {
                sidebar.classList.remove("expanded");
            }
        }, 150);
    })

    sidebar.addEventListener("click", (event) => {
        event.stopPropagation();
        sidebar.classList.add("expanded");
    });
}

export function setupSidebarNavigation(routes) {
    for (const [id, page] of Object.entries(routes)) {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener("click", () => {
                const overlay = document.getElementById("page-fade-overlay");

                if (overlay) {
                    overlay.classList.add("active");
                }

                setTimeout(() => {
                    window.location.href = page;
                }, 500);
            });
        }
    }
}