interface InputTypes {
    username: string;
    password: string;
    email: string;
}

function inputvalidator({
    username,
    password,
    email,
}: InputTypes): Map<string, string> {
    const errorMap = new Map<string, string>();

    const regex = new RegExp(/^[A-Za-z0-9]+$/);

    if (username) {
        if (username.length < 5) {
            errorMap.set('username', 'Username min. 5 characters.');
        } else if (!regex.test(username)) {
            errorMap.set(
                'username',
                'Username can only contain letters and numbers'
            );
        }
    } else {
        errorMap.set('username', 'Please write a username');
    }

    if (password) {
        if (password.length < 5) {
            errorMap.set('password', 'Password min. 8 characters.');
        }
    } else {
        errorMap.set('password', 'Please type in a password');
    }

    if (email) {
        const emailRegex = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if (!emailRegex.test(email)) {
            errorMap.set('email', 'Email must be valid.');
        }
    }

    return errorMap;
}
export { inputvalidator };
