
function SearchBar({search,onSearch}) {
    return (
        <div>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <form className="d-flex col-12 col-sm-12">
                                <input
                                    className="form-control me-2"
                                    type="text"
                                    placeholder="Search"
                                    onChange={(e) => onSearch(e.target.value)}
                                    value={search}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SearchBar;