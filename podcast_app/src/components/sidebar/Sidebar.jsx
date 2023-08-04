import './Sidebar.css';

export default function Sidebar ({children}) {
    return (
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sticky-top sidebar-color" style={{ width: '280px' }}>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    {children}
                </ul>
                <hr />
            </div>
    );
}