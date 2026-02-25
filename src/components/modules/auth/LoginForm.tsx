"use client"
import { loginAction } from '@/actions/auth';
import { LoadingButton } from '@/components/shared/LoadingButton';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { getDefaultDashboardRoute } from '@/lib/authUtils';
import { showError, showSuccess } from '@/lib/toast';
import { setError, setLoading, setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { userLoginSchema, UserLoginValues } from '@/zod/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const dispatch = useAppDispatch()
  const form = useForm<UserLoginValues>({ defaultValues: { email: "", password: "" }, resolver: zodResolver(userLoginSchema) })
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const searchParam = useSearchParams();
  const redirect = searchParam.get("redirect")

  const handleSubmit = async (values: UserLoginValues) => {
    dispatch(setLoading(true))
    const res = await loginAction(values)
    if (res.success) {
      dispatch(setUser(res.data))
      router.push(redirect || getDefaultDashboardRoute(res.data.role));
      showSuccess("Login success");
    } else {
      dispatch(setError(res.message))
      showError(res.message)
    }
    form.resetField("password")
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder='******'
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Link
              href="#"
              className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <LoadingButton isLoading={form.formState.isSubmitting} type='submit' loadingText="Logging In...">
            Log In
          </LoadingButton>

        </form>
      </Form>

    </div>
  );
}