import '../style/NavCode.scss'
import {useEffect} from "react";

export default function NavCode() {
    return (
        <div className='navcode'>
            <div>
                <h1 className='text-open'>Open Source</h1>
            </div>
            <div>
                <h5 className='text-open-'>
                    You can view the source code and make sure there are no viruses.</h5>
            </div>
            <div className='width-navbar'>
                <div className='navbar-code-preview'>
                    <div className='helper-border'>
                        <div className='backg-color'>
                            <div className='font-name'>
                                Video.list.js
                            </div>
                        </div>
                    </div>
                    <div className='main-code'>
                        <code className='pre-code'>
                            <div className='cm-line' style={{marginTop: '10px'}}>
                                <span className="sp-syntax-keyword">export</span>
                                <span className="sp-syntax-keyword"> default</span>
                                <span className="sp-syntax-keyword"> function</span>
                                <span className="sp-syntax-definition"> App</span>
                                <span className="sp-syntax-punctuation">()</span>
                                <span className="sp-syntax-punctuation"> {'{'}</span>
                            </div>
                            <div className='cm-line cl-margin' style={{marginLeft: '15px'}}>
                                <span className="sp-syntax-keyword">useEffect</span>
                                <span className="sp-syntax-punctuation">(() =></span>
                                <span className="sp-syntax-punctuation"> {'{'}</span>
                            </div>
                            <div className='cm-line' style={{marginLeft: '30px'}}>
                                <span className="sp-syntax-keyword">let</span>
                                <span className="sp-syntax-punctuation"> height</span>
                                <span className="sp-syntax-punctuation"> = </span>
                                <span className="syntax-string"> document.documentElement.clientHeight </span>
                            </div>
                            <div className='cm-line' style={{marginLeft: '30px'}}>
                                <span className="syntax-string"> document.</span>
                                <span className="sp-syntax-keyword">getElementById</span>
                                <span className="sp-syntax-punctuation">(<span className='sp-syntax-string-green'>'app'</span>)</span>
                                <span className="syntax-string">.style</span>
                                <span className="syntax-string">.height</span>
                                <span className="sp-syntax-punctuation"> = </span>
                                <span className='sp-syntax-string-green'>`<span className="sp-syntax-punctuation">${'{'}<span style={{color: '#a5b3c2'}}>height</span><span className="sp-syntax-punctuation">{'}'}</span></span>`</span>
                            </div>
                            <div className='cm-line' style={{marginLeft: '15px'}}>
                                <span className="sp-syntax-punctuation"> {'}'}, ); </span>
                            </div>
                            <div className='cm-line' style={{marginLeft: '15px'}}>
                                <span className="sp-syntax-punctuation">⠀</span>
                            </div>
                            <div className='cm-line' style={{marginLeft: '15px'}}>
                                <span className="sp-syntax-keyword">return</span>
                                <span className="sp-syntax-punctuation"> (</span>
                            </div>
                            <div className='cm-line' style={{marginLeft: '30px'}}>
                                <span className="sp-syntax-punctuation">{'<'}</span>
                                <span className="syntax-tag">app</span>
                                <span className="sp-syntax-punctuation">{'>'}</span>
                            </div>
                            <div className='cm-line' style={{marginLeft: '40px'}}>
                                <span className="sp-syntax-punctuation">{'<'}</span>
                                <span className="syntax-tag">h1</span>
                                <span className="sp-syntax-punctuation">{'>'}</span>
                                <span className="sp-syntax-punctuation">Hello!</span>
                                <span className="sp-syntax-punctuation">{'<'}</span>
                                <span className="syntax-tag">h1</span>
                                <span className="sp-syntax-punctuation">{'>'}</span>
                            </div>
                            <div className='cm-line' style={{marginLeft: '30px'}}>
                                <span className="sp-syntax-punctuation">{'<'}/</span>
                                <span className="syntax-tag">app</span>
                                <span className="sp-syntax-punctuation">{'>'}</span>
                            </div>
                            <div className='cm-line' style={{marginLeft: '15px'}}>
                                <span className="sp-syntax-punctuation">{')'}</span>
                            </div>
                            <div className='cm-line' style={{marginLeft: '0px'}}>
                                <span className="sp-syntax-punctuation">{'}'}</span>
                            </div>
                        </code>
                    </div>
                </div>
            </div>
        </div>
    )
}