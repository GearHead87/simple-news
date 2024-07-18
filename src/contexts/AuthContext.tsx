import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_APIKEY,
};

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextType {
	user: string | null;
	signin: (email: string, password: string, callback: VoidFunction) => void;
	signup: (email: string, password: string, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
}

interface AuthProviderProps {
	children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<string | null>(null);

	const signin = async (email: string, password: string, callback: VoidFunction) => {
		try {
			const response = await axios.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
				{
					email,
					password,
					returnSecureToken: true,
				}
			);
			console.log(response.data);
			setUser(response.data.idToken);
			localStorage.setItem('authToken', response.data.idToken);
			callback();
		} catch (error) {
			console.error('Sign-in error', error);
		}
	};

	const signup = async (email: string, password: string, callback: VoidFunction) => {
		try {
			const response = await axios.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`,
				{
					email,
					password,
					returnSecureToken: true,
				}
			);
			console.log(response.data);
			setUser(response.data.idToken);
			localStorage.setItem('authToken', response.data.idToken);
			callback();
		} catch (error) {
			console.error('Sign-up error', error);
		}
	};

	const signout = async (callback: VoidFunction) => {
		try {
			// await axios.post(
			// 	`https://identitytoolkit.googleapis.com/v1/accounts:signOut?key=${firebaseConfig.apiKey}`
			// );
			setUser(null);
			localStorage.removeItem('authToken');
			callback();
		} catch (error) {
			console.error('Sign-out error', error);
		}
	};

	const validateToken = async (token: string) => {
		try {
			const response = await axios.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseConfig.apiKey}`,
				{
					idToken: token,
				}
			);
			if (response.data.users.length > 0) {
				setUser(token);
			} else {
				setUser(null);
				localStorage.removeItem('authToken');
			}
		} catch (error) {
			console.error('Token validation error', error);
			setUser(null);
			localStorage.removeItem('authToken');
		}
	};

	useEffect(() => {
		const token = localStorage.getItem('authToken');
		if (token) {
			validateToken(token);
		}
	}, []);

	const value: AuthContextType = { user, signin, signup, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
	const context = useContext(AuthContext);
	if (context === null) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}

export default { AuthProvider, useAuth };
