"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { School } from "lucide-react"
import Link from "next/link"

export default function RegisterForm() {
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

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Create your account
          </h2>
        </div>

        {/* ROLE */}
        <div className="space-y-3">
          <Label>I am joining as</Label>

          <RadioGroup defaultValue="student" className="grid sm:grid-cols-2 gap-4">

            <label>
              <Card className="cursor-pointer border-primary/50 bg-primary/10">
                <CardContent className="flex items-center gap-3 ">
                  <RadioGroupItem value="student" />
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
              <Card className="cursor-pointer">
                <CardContent className="flex items-center gap-3 ">
                  <RadioGroupItem value="instructor" />
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
        </div>

        {/* NAME */}
        <div className="space-y-2">
          <Label>Full name</Label>
          <Input placeholder="Jane Doe" />
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="jane@company.com" />
        </div>

        {/* PASSWORD */}
        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" placeholder="Create password" />
        </div>

        {/* TERMS */}
        <div className="flex items-start gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm leading-relaxed">
            I agree to the Terms and Privacy Policy
          </Label>
        </div>

        <Button className="w-full">
          Create Account
        </Button>

        <div className="text-center text-sm text-slate-600 dark:text-slate-400 mt-4">
          Already have an account?{" "}
          <Link className="font-bold text-primary hover:text-primary-hover transition-colors" href="/login">
            Log in
          </Link>
        </div>
        {/* <Separator /> */}

        {/* SOCIAL */}
        {/* <div className="grid grid-cols-2 gap-3">
          <Button variant="outline">Google</Button>
          <Button variant="outline">Facebook</Button>
        </div> */}

      </div>
    </div>
  )
}