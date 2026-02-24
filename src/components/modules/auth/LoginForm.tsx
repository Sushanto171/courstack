import { LoadingButton } from '@/components/shared/LoadingButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye } from 'lucide-react';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="name@gmail.com" />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 relative">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className='absolute right-2 top-[70%] -translate-y-[50%] opacity-50 hover:opacity-100 transition-opacity'
          >
            <span className=""><Eye /></span>
          </Button>
        </div>

        <div className="flex justify-end">
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

        <LoadingButton isLoading={false} loadingText="Logging In...">
          Log In
        </LoadingButton>

      </form>

    </div>
  );
}