
import { Role } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type User = {
  id: string
  name: string
  email: string
  role: Role
  password?: string
} | null

type AuthState = {
  user: User
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    clearUser: (state) => {
      state.user = null;
    }
  }
})

export const { setUser, clearUser, setError, setLoading } = authSlice.actions
export default authSlice.reducer;