function Searchbar({ searchValueCallback }) {
    function onInputChange(event) {
        searchValueCallback(event.target.value);
    }

    return(
        <div className="row">
            <div className="col-6 input-group mb-3">
                <input type="text" className="form-control" placeholder="Search projects..." onInput={onInputChange}/>
            </div>
        </div>
    )
}

export default Searchbar;