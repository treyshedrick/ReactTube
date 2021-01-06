import logo from '../logo.svg';

const AppHeader = () =>{
    return(
        <header className="row">
            <div className="col-1">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="ReactTube">ReactTube</div>
            </div>
            <div className="col-10">
                <input type="text" className="form-control" value="ReactJS" readOnly></input>
                <button className="btn btn-outline-secondary border-0 border header-button"><i className="fa fa-search"></i></button>
            </div>
            <div className="col-1"></div>
      </header>
    )
}

export default AppHeader;