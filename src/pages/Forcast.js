
const Forcast = () => {


    return (

        <div className="forcastContainer">

            <div className="row">

                {/* side panel to display todays forcast */}
                <div className="col-4">

                    <div className="todayForcast">
                        <p className="todayTitle">Today's Forcast</p>
                        <p className="today">Temp:</p>
                        <p className="today">Wind:</p>
                        <p className="today">Precipitation:</p>
                    </div>

                </div>

                {/* Main content displaying future forcasts */}
                <div className="col-8">

                    <div className="d-flex flex-wrap">

                        <div className="forcastCards ">
                            <p className="future futureDate">Date</p>
                            <p className="future">Temp:</p>
                            <p className="future">Wind:</p>
                            <p className="future">Precipitation:</p>
                        </div>

                        <div className="forcastCards ">
                            <p className="future futureDate">Date</p>
                            <p className="future">Temp:</p>
                            <p className="future">Wind:</p>
                            <p className="future">Precipitation:</p>
                        </div>

                        <div className="forcastCards ">
                            <p className="future futureDate">Date</p>
                            <p className="future">Temp:</p>
                            <p className="future">Wind:</p>
                            <p className="future">Precipitation:</p>
                        </div>

                        <div className="forcastCards ">
                            <p className="future futureDate">Date</p>
                            <p className="future">Temp:</p>
                            <p className="future">Wind:</p>
                            <p className="future">Precipitation:</p>
                        </div>

                        <div className="forcastCards ">
                            <p className="future futureDate">Date</p>
                            <p className="future">Temp:</p>
                            <p className="future">Wind:</p>
                            <p className="future">Precipitation:</p>
                        </div>
                    </div>

                    {/* needs a flexbox inside this box */}

                </div>

            </div>

        </div>

    )

};

export default Forcast;