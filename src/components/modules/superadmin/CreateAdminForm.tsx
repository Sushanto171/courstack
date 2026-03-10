"use client"

import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff, Mail, UserPlus } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { createAdminAction } from "@/actions/user"
import { LoadingButton } from "@/components/shared/LoadingButton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { generateSecurePassword } from "@/lib/generateSecurePassword"
import { showError, showSuccess } from "@/lib/toast"
import { cn } from "@/lib/utils"
import { userRegisterSchema, UserRegisterValues } from "@/zod/auth"

export default function CreateAdminForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [manualPassword, setManualPassword] = useState(false)

  const form = useForm<UserRegisterValues>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: true,
    },
  })

  const onSubmit = async (values: UserRegisterValues) => {
    const result = await createAdminAction(values)

    if (result.success) {
      showSuccess("Admin Account created.")
      form.reset()
    } else {
      showError(result.message)
    }
  }

  const handleAutoPassword = () => {
    setManualPassword(false);
    const password = generateSecurePassword()
    form.setValue("password", password)

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>

        <div className="p-8 space-y-6">

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* NAME */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Sarah Johnson" {...field} />
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="sarah.j@courstack.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>

          {/* PASSWORD */}
          <div className={cn(manualPassword ? "" : "hidden")}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="******"
                        {...field}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      >
                        {showPassword ? (
                          <Eye className="h-4 w-4" />
                        ) : (
                          <EyeOff className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Role Section */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold">
              Administrative Role
            </Label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <Label className="relative flex items-center p-4 border-2 border-primary bg-primary/5 rounded-xl cursor-pointer">
                <Input
                  type="radio"
                  value="ADMIN"
                  defaultChecked
                  className="hidden"
                />

                <div className="flex flex-col">
                  <span className="text-sm font-bold">Admin</span>
                  <span className="text-xs text-muted-foreground mt-1">
                    Full access to users, courses, categories.
                  </span>
                </div>
              </Label>

              <Label className="relative flex items-center p-4 border rounded-xl cursor-pointer hover:border-muted transition-colors">
                <Input
                  type="radio"
                  value="ops"
                  className="hidden"
                />

                <div className="flex flex-col opacity-50 cursor-not-allowed">
                  <span className="text-sm font-bold">
                    Operational Manager
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    Manage courses and student support only.
                  </span>
                </div>
              </Label>

            </div>
          </div>

          {/* Password generation info */}
          <div className="pt-4 border-t flex flex-col gap-4">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-semibold">
                  Password Generation
                </p>

                <p className="text-xs text-muted-foreground">
                  How should the user receive their login credentials?
                </p>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => setManualPassword(true)} type="button" variant="secondary" size="sm">
                  Manual
                </Button>

                <Button onClick={handleAutoPassword} type="button" size="sm">
                  Auto-generate
                </Button>
              </div>

            </div>

            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <Mail className="h-4 w-4 text-primary" />

              <p className="text-sm text-muted-foreground">
                A secure password will be generated and sent to the provided
                email address immediately upon creation.
              </p>
            </div>

          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-8 py-6 bg-muted/40 border-t flex items-center justify-end gap-3">

          <Button type="button" onClick={() => form.reset()} variant="ghost">
            Cancel
          </Button>

          <LoadingButton
            type="submit"
            isLoading={form.formState.isSubmitting}
            loadingText="Creating..."
            className="flex items-center gap-2"
          >
            <UserPlus className="h-4 w-4" />
            Create Account
          </LoadingButton>

        </div>

      </form>
    </Form>
  )
}