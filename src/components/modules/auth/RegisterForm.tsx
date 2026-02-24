"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { zodResolver } from "@hookform/resolvers/zod"
import { School } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { loginAction, userRegisterAction } from "@/actions/auth"
import { LoadingButton } from "@/components/shared/LoadingButton"
import { showError, showSuccess } from "@/lib/toast"
import { cn } from "@/lib/utils"
import { useAppDispatch } from "@/redux/hooks"
import { userRegisterSchema, UserRegisterValues } from "@/zod/auth"
import { setUser } from "@/redux/features/auth/authSlice"



export default function RegisterForm() {
  const dispatch = useAppDispatch()
  const form = useForm<UserRegisterValues>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      role: "STUDENT",
      name: "",
      email: "",
      password: "",
      terms: false,
    },
  })

  async function onSubmit(values: UserRegisterValues) {
    const result = await userRegisterAction(values)
    if (result.success) {
      showSuccess("Account created.")
      form.reset()
      const res = await loginAction(values)
      if (res.success) {
        console.log(res.data)
        dispatch(setUser(res.data))
      }
    } else {
      showError(result.message)
    }

  }

  const role = form.watch("role")

  return (
    <div className="p-8 lg:p-12">

      {/* mobile logo */}
      <div className="lg:hidden mb-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-primary text-white">
            <School size={16} />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Courstack
          </span>
        </Link>
      </div>

      <div className="mx-auto max-w-md space-y-5">

        <h2 className="text-2xl font-semibold tracking-tight">
          Create your account
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

            {/* ROLE */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>I am joining as</FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="grid sm:grid-cols-2 gap-4"
                    >

                      <label>
                        <Card className={cn("cursor-pointer",
                          role === "STUDENT" && "border-primary bg-primary/10"
                        )}>
                          <CardContent className="flex items-center gap-3">
                            <RadioGroupItem value="STUDENT" />
                            <div>
                              <div className="font-medium">Student</div>
                              <div className="text-xs text-muted-foreground">
                                Access courses & progress
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </label>

                      <label>
                        <Card className={cn("cursor-pointer",
                          role === "INSTRUCTOR" && "border-primary bg-primary/10"
                        )}>
                          <CardContent className="flex items-center gap-3">
                            <RadioGroupItem value="INSTRUCTOR" />
                            <div>
                              <div className="font-medium">Instructor</div>
                              <div className="text-xs text-muted-foreground">
                                Create content & analytics
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </label>

                    </RadioGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* NAME */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jane@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* PASSWORD */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Create password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* TERMS */}
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <Label className="text-sm leading-relaxed">
                    I agree to the Terms and Privacy Policy
                  </Label>
                </FormItem>
              )}
            />

            <LoadingButton type="submit" isLoading={form.formState.isSubmitting} loadingText="Creating..." className="w-full">
              Create Account
            </LoadingButton>

          </form>
        </Form>

        <div className="text-center text-sm text-slate-600 dark:text-slate-400 mt-4">
          Already have an account?{" "}
          <Link
            className="font-bold text-primary hover:text-primary-hover transition-colors"
            href="/login"
          >
            Log in
          </Link>
        </div>

      </div>
    </div>
  )
}