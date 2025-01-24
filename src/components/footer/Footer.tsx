import React from 'react'
import './style/footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="app-footer">
                <div className='footer-links'>
                    <div>개인정보취급방침</div>
                    <div>이용약관</div>
                    <div>이메일무단수집거부</div>
                </div>
            </div>
            <div className='footer-info'>
                <div className='footer-info-text'>
                    <p>
                    INC는 Industrial Nurse Communnity의 약자로, 산업 간호사 분들의 정보 및 자료 교환을 목적으로 운영되는 커뮤니티입니다.<br/>
                    </p>
                    <p>
                        대표 : 정영인 | TEL : 010-6682-4008 | MAIL: yiniwinidev@gmail.com<br />
                    </p>
                    <p>
                        Copyright © by 이해 All Rights Reserved.
                    </p>
                </div>
                <div className='footer-logo'>
                    <img src='/logo_icon.png' alt='logo'/>
                </div>
            </div>
        </div>
    )
}

export default Footer