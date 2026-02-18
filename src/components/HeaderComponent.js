import React, { Component } from 'react' //

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header className="mb-4">
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow-sm px-4">
                        <div>
                            <a href="/" className="navbar-brand fw-bold">
                                <i className="bi bi-cpu-fill me-2"></i>PTC Resource Management System
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent