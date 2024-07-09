// Imports start

// Form validation imports start
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from './schema/'; // Asegúrate de que la ruta sea correcta

// Form validation imports end

// Form components import start
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	useFormField,
} from './components/ui/form';

import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

// Form components import end

// Imports end

export default function App() {
	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	// Submit handler
	function submitHandler(data: z.infer<typeof RegisterSchema>) {
		console.log(
			`Your data is: Name => ${data.name}, email => ${data.email}, password => ${data.password}, confirmPassword => ${data.confirmPassword}`
		);
	}

	return (
		<Form {...form}>
			<form
				className="h-50 grid place-content-center text-white my-11"
				onSubmit={form.handleSubmit(submitHandler)}
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="h-50 grid place-content-center">
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Name"
									{...field}
								/>
							</FormControl>
							<FormDescription className="hidden">
								This is your public display name
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				></FormField>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="h-50 grid place-content-center my-4 ">
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="Email"
									{...field}
									className=""
								/>
							</FormControl>
							<FormDescription className="hidden">
								Enter your email
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				></FormField>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="h-50 grid place-content-center my-4">
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Password"
									{...field}
								/>
							</FormControl>
							<FormDescription className="hidden">
								Enter a secure password
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				></FormField>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem className="h-50 grid place-content-center my-4">
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Confirm Password"
									{...field}
								/>
							</FormControl>
							<FormDescription className="hidden">
								Re-enter your password
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				></FormField>
				<Button
					type="submit"
					className="h-50 grid place-content-center bg-black border-white border"
				>
					Submit
				</Button>
			</form>
		</Form>
	);
}
