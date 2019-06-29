import React, { Component } from "react";
import "./Main/Main.css"
import Ebtn from "./Ebtn/Ebtn"
import Mbtn from "./Mbtn/Mbtn"
import Hbtn from "./Hbtn/Hbtn"
import Portraits from "./Portraits/Portraits";
import Easy from "./easy.json";
import Medium from "./medium.json";
import Hard from "./hard.json"

class Main extends Component {

    state = {
        difficulty: Easy,
        idHolder: [],
        score: 0,
        eHighScore: 0,
        mHighScore: 0,
        hHighScore: 0
    };

    changeEasy = data => {

        let score = this.state.score;
        let idHolder = this.state.idHolder;

        score = 0;
        this.setState({ score })

        idHolder.length = 0;
        this.setState({ idHolder })

        console.log(data)
        this.setState({ difficulty: Easy })
    }

    changeMedium = data => {

        let score = this.state.score;
        let idHolder = this.state.idHolder;

        score = 0;
        this.setState({ score })

        idHolder.length = 0;
        this.setState({ idHolder })

        console.log(data)
        this.setState({ difficulty: Medium })
    }

    changeHard = data => {

        let score = this.state.score;
        let idHolder = this.state.idHolder;

        score = 0;
        this.setState({ score })

        idHolder.length = 0;
        this.setState({ idHolder })

        console.log(data)
        this.setState({ difficulty: Hard })
    }

    swapPortraits = id => {

        const idHolder = this.state.idHolder;
        const checker = this.state.idHolder.includes(id);
        let score = this.state.score;

        if (checker) {
            // console.log(true);

            score = 0;

            this.setState({ score });

            alert("OH NO! That picture has already been picked. Try again?");

            idHolder.length = 0;
            this.setState({ idHolder })
        }
        else if (!checker) {

            // console.log(false);

            score++;

            // console.log(score);

            this.setState({ score })

            // console.log(this.state.score);

            idHolder.push(id);

            this.setState({ idHolder });
            this.truffleShuffle();
            this.setHighScore(score);
        }
    }

    truffleShuffle() {

        const difficulty = this.state.difficulty;
        let m = difficulty.length, t, i;

        while (m) {

            i = Math.floor(Math.random() * m--);

            t = difficulty[m];
            difficulty[m] = difficulty[i];
            difficulty[i] = t;
        }

        this.setState({ difficulty })
    }

    setHighScore(score) {

        const difficulty = this.state.difficulty;
        let hScore = score;
        let idHolder = this.state.idHolder;
        let eHighScore = this.state.eHighScore;
        let mHighScore = this.state.mHighScore;
        let hHighScore = this.state.hHighScore;

        console.log(hScore);

        if (difficulty === Easy) {

            if (hScore === 12) {

                if (eHighScore === 12) {
                    return
                }

                eHighScore = hScore;
                this.setState({ eHighScore });

                alert("You Win! Now try Medium or Hard!?")

                score = 0
                this.setState({ score })

                idHolder.length = 0;
                this.setState({ idHolder })
            }
            else if (hScore < eHighScore) {
                return
            }
            else {
                eHighScore = hScore;
                this.setState({ eHighScore });
            }
        }
        else if (difficulty === Medium) {

            if (hScore === 12) {

                if (mHighScore === 12) {
                    return
                }

                mHighScore = hScore;
                this.setState({ mHighScore });

                alert("You Win! Now try Medium or Hard!?")

                score = 0
                this.setState({ score })

                idHolder.length = 0;
                this.setState({ idHolder })
            }
            else if (hScore < mHighScore) {
                return
            }
            else {
                mHighScore = hScore;
                this.setState({ mHighScore });
            }
        }
        else if (difficulty === Hard) {

            if (hScore === 12) {

                if (hHighScore === 12) {
                    return
                }

                hHighScore = hScore;
                this.setState({ hHighScore });

                alert("You Win! Now try Medium or Hard!?")

                score = 0
                this.setState({ score })

                idHolder.length = 0;
                this.setState({ idHolder })
            }
            else if (hScore < hHighScore) {
                return
            }
            else {
                hHighScore = hScore;
                this.setState({ hHighScore });
            }
        }

    }

    render() {
        return (
            <div>
                <div className="navbar navbar-dark bg-dark" id="navFix1">
                    <span className="navbar-text">
                        <img src="./images/logo.png" alt="Logo" id="navFix2"></img>
                    </span>
                    <div>
                        <Ebtn
                            changeEasy={this.changeEasy}
                        />
                        <Mbtn
                            changeMedium={this.changeMedium}
                        />
                        <Hbtn
                            changeHard={this.changeHard}
                        />
                    </div>

                </div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <p className="text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <div className="conatiner">
                    <div className="row">
                        <div className="col-3 m-auto text-center">
                            <h2>Score: {this.state.score}</h2>
                        </div>
                        <div className="col-6">
                            <div className="m-auto">
                                {this.state.difficulty.map(diff => (
                                    <Portraits
                                        swapPortraits={this.swapPortraits}
                                        id={diff.id}
                                        key={diff.id}
                                        name={diff.name}
                                        image={diff.image}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-3 m-auto">
                            <h2>High Score</h2>
                            <h4>Easy: {this.state.eHighScore}</h4>
                            <h4>Medium: {this.state.mHighScore}</h4>
                            <h4>Hard: {this.state.hHighScore}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;