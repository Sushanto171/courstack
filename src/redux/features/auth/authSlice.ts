
import { Role } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type AuthUser = {
  id: string
  name: string
  email: string
  role: Role
} | null

type AuthState = {
  user: AuthUser
  loading: boolean
  initialLoading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  initialLoading: true
}


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      state.initialLoading = false
    },
    setInitialLoadingDone: (state) => {
      state.initialLoading = false
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null
    },
    clearUser: (state) => {
      state.user = null
      state.loading = false
      state.error = null;
      state.initialLoading = false;
    },
  }
})

export const { setUser, clearUser, setError, setLoading, setInitialLoadingDone } = authSlice.actions
export default authSlice.reducer;