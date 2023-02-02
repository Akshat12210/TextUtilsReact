import DetectLanguage from "detectlanguage";
import React, { useState, useEffect } from "react";
import { data } from "../data/language";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [language, setLanguage] = useState("");
    const detectLanguage = new DetectLanguage(process.env.REACT_APP_API_KEY);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert.success("Converted to Uppercase");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert.success("Converted to Lowercase");
    };

    const getLanguage = () => {
        detectLanguage.detect(text).then((result) => {
            const lanCode = result[0]["language"];
            const ans = data.filter((ele) => {
                return lanCode === ele.code;
            });
            const t=ans[0].name.slice(0,1)+ans[0].name.slice(1).toLowerCase();
            setLanguage(t);
            props.showAlert.success(t+" detected");   
        });
    };

    const trim = () => {
        let newText = text.trim();
        setText(newText);
        props.showAlert.success("Spaces removed");
    };

    const clear = () => {
        let newText = "";
        setText(newText);
        setLanguage(newText);
        props.showAlert.success("Text Area Cleared");
    };

    const copy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert.success("Text Copied");
    };
    const onhandlechange = (event) => {
        setText(event.target.value);
    };

    useEffect(() => {
        if (text.length === 0) {
            setLanguage("");
        }
    }, [text]);

    return (
        <>
            <div
                className="container"
                style={{marginTop:40, color: props.mode === "light" ? "black" : "#EEEEEE" }}
            >
                <h1 className="code mb-2">{props.heading} </h1>
                <div className="mb-3 row">
                    <div className="col-6">
                        <textarea
                            style={{
                                borderWidth: 2,
                                minWidth: "179px",
                                borderColor: "black",
                                borderRadius: 8,
                                boxShadow:"5px 8px #03001C",
                                backgroundColor: props.mode === "light" ? "white" : "#FDEFF4",
                                color: props.mode === "light" ? "black" : "#5D3891",
                                height: "100%",
                            }}
                            className="form-control"
                            id="myBox"
                            rows="6"
                            value={text}
                            onChange={onhandlechange}
                        ></textarea>
                    </div>
                    <div className="col text-white" style={{ minWidth: "155px" }}>
                        <button
                            style={{ backgroundColor: "#645CBB", color: "white" }}
                            disabled={text.length === 0}
                            className="btn  mx-2 my-1"
                            onClick={handleUpClick}
                        >
                            Convert to Uppercase
                        </button>

                        <button
                            style={{ backgroundColor: "#645CBB", color: "white" }}
                            disabled={text.length === 0}
                            className="btn  mx-2 my-1"
                            onClick={handleLoClick}
                        >
                            Convert to Lowercase
                        </button>

                        <button
                            style={{ backgroundColor: "#645CBB", color: "white" }}
                            disabled={text.length === 0}
                            className="btn  mx-2 my-1"
                            onClick={trim}
                        >
                            Trim space
                        </button>

                        <button
                            style={{ backgroundColor: "#645CBB", color: "white" }}
                            disabled={text.length === 0}
                            className="btn  mx-2 my-1"
                            onClick={clear}
                        >
                            Clear Text
                        </button>

                        <button
                            style={{ backgroundColor: "#645CBB", color: "white" }}
                            disabled={text.length === 0}
                            className="btn  mx-2 my-1"
                            onClick={copy}
                        >
                            Copy Text
                        </button>

                        <button
                            style={{ backgroundColor: "#645CBB", color: "white" }}
                            disabled={text.length === 0}
                            className="btn  mx-2 my-1"
                            onClick={getLanguage}
                        >
                            Detect Language
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="container my-4 code"
                style={{ color: props.mode === "light" ? "black" : "#EEEEEE" }}
            >
                <h2>Text Summary</h2>
                <p>
                    {text.length > 1
                        ? text.split(/\s+/).filter((element) => {
                            return element.length !== 0;
                        }).length
                        : 0}{" "}
                    words and {text.length} characters
                </p>
                <p>
                    {text.length > 1 ? 0.008 * text.split(" ").length : 0} minutes read
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text box"}</p>
                {language.length !== 0 && text.length !== 0 ? (
                    <>
                        <span><h2>Language</h2>{language}</span>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}
