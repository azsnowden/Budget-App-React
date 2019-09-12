import React, {Component} from 'react'

class Home extends Component{
    render(){
        return(
            <div className="col col-sm-12">
                <div className="total-budget">TotalBudget: $2000</div>
                <div className="total-spent">TotalSpent: $1000</div>
                </div>
        )
    }
}

export default Home