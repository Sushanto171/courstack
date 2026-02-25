/* eslint-disable react-hooks/refs */
'use client'
import { AuthUser, setInitialLoadingDone, setUser } from '@/redux/features/auth/authSlice'
import { AppStore, makeStore } from '@/redux/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({
  children,
  initialUser
}: {
  children: React.ReactNode,
  initialUser: AuthUser | null
}) {

  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    if (initialUser) {
      storeRef.current.dispatch(setUser(initialUser))
    } else {
      storeRef.current.dispatch(setInitialLoadingDone())
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}