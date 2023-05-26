import React from "react";
import { useState } from "react";
import './BodyContent.css'

function BodyContent() {
    const [val, setVal] = useState(null);
    const [shop, setShop] = useState("");
    const [result, setResult] = useState(false);
    const checkboxes = document.getElementsByClassName("sites");

    const onOptionChange = (e) => {
        setVal(e.target.value);
    };

    const onCheckBoxSelect = () => {
        let res = "";
        for (let checkbox of checkboxes) {
            if (checkbox.checked) {
                res += " " + checkbox.value;
            }
        }
        setShop(res);
    };

    const showResult = () => {
        setResult(true);
    };

    return (
        <div className="body-content">
            <div className="form">
                <div className="radio">
                    <div className="radio-heading">
                        What is your marital status?
                    </div>
                    <div className="radio-btn">
                        <div className="m-radio">
                            <input
                                type="radio"
                                value="Married"
                                name="marital"
                                onChange={onOptionChange}
                            />
                            <div>Married</div>
                        </div>
                        <div className="u-radio">
                            <input
                                type="radio"
                                value="Unmarried"
                                name="marital"
                                onChange={onOptionChange}
                            />
                            <div>Unmarried</div>
                        </div>
                    </div>
                </div>
                <div className="output">
                    <div>
                        You are <span className="ans">{val}</span>
                    </div>
                </div>
                <div className="checkbox">
                    <div className="radio-heading">
                        What is your favorite website?
                    </div>
                    <div className="ck">
                        <div className="a-ck">
                            <input
                                type="checkbox"
                                name="amazon"
                                value="Amazon"
                                className="sites"
                                onChange={onCheckBoxSelect}
                            />
                            <div>Amazon</div>
                        </div>
                        <div className="f-ck">
                            <input
                                type="checkbox"
                                name="amazon"
                                value="Flipkart"
                                className="sites"
                                onChange={onCheckBoxSelect}
                            />
                            <div>Flipkart</div>
                        </div>
                        <div className="m-ck">
                            <input
                                type="checkbox"
                                name="amazon"
                                value="Myntra"
                                className="sites"
                                onChange={onCheckBoxSelect}
                            />
                            <div>Myntra</div>
                        </div>
                    </div>
                </div>
                <div className="output-ck">
                    <div>
                        You have selected <span className="ans">{shop}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyContent;
