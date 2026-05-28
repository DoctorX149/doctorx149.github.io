//navbar.js
class myNavbar extends HTMLElement {
    /* This class defines the header and its navigation options for the 
     * personal site project. It is responsive to various screen sizes,
     * with collapsed navigation options on small screens and inline
     * options on larger screens.
     */
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <a class="navbar-brand" href="/index.html">Alexander Hawkins</a>
                <button 
                    class="navbar-toggler" 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarContent">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-item nav-link" href="/about.html">
                            About Me
                        </a>
                        <a class="nav-item nav-link" href="/projects.html">
                            Projects
                        </a>
                        <a class="nav-item nav-link" href="/experience.html">
                            Experience
                        </a>
                        <a class="nav-item nav-link" href="/contact.html">
                            Contact Me
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('my-navbar', myNavbar);