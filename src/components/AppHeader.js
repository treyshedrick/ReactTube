import logo from '../logo.svg';

const AppHeader = () =>{
    return(
        <header className="row AppHeader">
            <div className="col-2">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="ReactTube">ReactTube</div>
            </div>
            <div className="col-8">
                <input type="text" className="form-control" value="ReactJS" readOnly></input>
                <button className="btn btn-outline-secondary border-0 border header-button"><i className="fa fa-search"></i></button>
            </div>
            <div className="col-2"></div>
      </header>
    )
}

export default AppHeader;