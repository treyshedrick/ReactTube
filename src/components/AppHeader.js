import logo from '../logo.svg';

const AppHeader = () =>{
    return(
        <header className="row AppHeader">
            <div className="col-2">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="ReactTube">ReactTube</div>
            </div>
            <div className="col-8">
                <div className="header-text">React Tutorials</div>
            </div>
            <div className="col-2"></div>
      </header>
    )
}

export default AppHeader;