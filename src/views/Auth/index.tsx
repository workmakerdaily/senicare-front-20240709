import React, { ChangeEvent, useState } from 'react'
import './style.css';
import InputBox from 'src/components/InputBox';


export default function Auth() {

    const [name, setName] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwrodCheck, setPasswordCheck] = useState<string>('');
    const [telNumber, setTelNumber] = useState<string>(''); // 숫자가 0으로 시작하면 string으로 받는게 편함
    const [authNumber, setAuthNumber] = useState<string>('');

    const [nameMessage, setNameMessage] = useState<string>('');
    const [idMessage, setIdMessage] = useState<string>('');
    const [passwordMessage, setPasswordMessage] = useState<string>('');
    const [passwordCheckMessage, setPasswordCheckMessage] = useState<string>('');
    const [telNumberMessage, setTelNumberMessage] = useState<string>('');
    const [authNumberMessage, setAuthNumberMessage] = useState<string>('');

    const [nameMessageError, setNameMessageError] = useState<boolean>(false);
    const [idMessageError, setIdMessageError] = useState<boolean>(false);
    const [passwordMessageError, setPasswordMessageError] = useState<boolean>(false);
    const [passwordCheckMessageError, setPasswordCheckMessageError] = useState<boolean>(false);
    const [telNumberMessageError, setTelNumberMessageError] = useState<boolean>(false);
    const [authNumberMessageError, setAuthNumberMessageError] = useState<boolean>(false);

    const onNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setName(value);
    };
    
    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setId(value);
    };

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);

        const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$/;
        const isMatched = pattern.test(value);

        const message = isMatched ? '' : '영문, 숫자를 혼용하여 8 ~ 13자리를 입력해주세요.';
        setPasswordMessage(message);
        setPasswordMessageError(!isMatched);

        if (!passwrodCheck) return;

        const isEqual = passwrodCheck === value;
        const checkMessage = isEqual ? '' : '비밀번호가 일치하지 않습니다.';
        setPasswordCheckMessage(checkMessage);
        setPasswordCheckMessageError(!isEqual);
    };

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordCheck(value);

        if (!password) return;

        const isEqual = password === value;
        const message = isEqual ? '' : '비밀번호가 일치하지 않습니다.'
        setPasswordCheckMessage(message);
        setPasswordCheckMessageError(!isEqual);
    };

    const onTelNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTelNumber(value);
    }

    const onAuthNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setAuthNumber(value);
    }

    const onIdCheckClickHandler = () => {
        if (!id) return;
        const isDuplicated = id === 'qwer1234';
        const message = isDuplicated ? '이미 사용중인 아이디 입니다.' : '사용 가능한 아이디입니다.';
        setIdMessage(message);
        setIdMessageError(isDuplicated);
    };

    const onTelNumberSendClickHandler = () => {
        if (!id) return;
        alert('인증번호 전송!');
    };

    const onAuthNumberCheckClickHandler = () => {
        if (!id) return;
        alert('인증번호 확인!');
    };

    return (
        <div id="auth-wrapper">
            <div className="auth-image"></div>
            <div className="auth-container">
                <div style={{gap: '16px' }} className="auth-box">
                    <div className="title-box">
                        <div className="title">시니케어</div>
                        <div className="logo"></div>
                    </div>
                    <div className="sns-container">
                        <div className="title">SNS 회원가입</div>
                        <div className="sns-button-container">
                            <div className="sns-button md kakao"></div>
                            <div className="sns-button md naver"></div>
                        </div>
                    </div>
                    <div style={{width: '64px' }} className="divider"></div>

                    <div className="input-container">

                        <InputBox messageError={nameMessageError} message={nameMessage} value={name} label='이름' type='text' placeholder='이름을 입력해주세요.' onChange={onNameChangeHandler} />
                        <InputBox messageError={idMessageError} message={idMessage} value={id} label='아이디' type='text' placeholder='아이디를 입력해주세요.' buttonName='중복 확인' onChange={onIdChangeHandler} onButtonClick={onIdCheckClickHandler} />
                        <InputBox messageError={passwordMessageError} message={passwordMessage} value={password} label='비밀번호' type='text' placeholder='비밀번호를 입력해주세요.' onChange={onPasswordChangeHandler} />
                        <InputBox messageError={passwordCheckMessageError} message={passwordCheckMessage} value={passwrodCheck} label='비밀번호 확인' type='password' placeholder='비밀번호를 입력해주세요' onChange={onPasswordCheckChangeHandler} />
                        <InputBox messageError={telNumberMessageError} message={telNumberMessage} value={telNumber} label='전화번호' type='text' placeholder='-빼고 입력해주세요.' buttonName='전화번호 인증' onChange={onTelNumberChangeHandler} onButtonClick={onTelNumberSendClickHandler}/>
                        <InputBox messageError={authNumberMessageError} message={authNumberMessage} value={authNumber} label='인증번호' type='text' placeholder='인증번호 4자리를 입력해주세요.' buttonName='인증 확인' onChange={onAuthNumberChangeHandler} onButtonClick={onAuthNumberCheckClickHandler} />

                    </div>

                    <div className="button-container">
                        <div id="sign-up-button" className="button disable full-width">회원가입</div>
                        <div className="link">로그인</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
