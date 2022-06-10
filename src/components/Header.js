import React from 'react'

const Header =()=> {
    return(
        <header className ='topHeader'
        >
            <div className ='container-fluid'>
                <div className ='row'>
                    <h1 className ='h1 text-center mainName'><svg className="icon icon-history"><use xlinkHref="#icon-history"></use></svg>ost in time</h1>
                </div>
            </div>
        </header>
    )
}

export default Header