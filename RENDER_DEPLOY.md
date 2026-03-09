# 🚀 Deploy Backend to Render

## Step-by-Step Guide:

### 1. Go to Render
Visit: https://render.com

### 2. Sign Up/Login
- Click **Get Started**
- Sign up with **GitHub**
- Authorize Render to access your repositories

### 3. Create New Web Service
- Click **New +** button (top right)
- Select **Web Service**

### 4. Connect Repository
- Find and select: **om295-cell/hospital-**
- Click **Connect**

### 5. Configure Service
Fill in these settings:

**Name**: `hospital-backend`

**Root Directory**: Leave empty (or type `.`)

**Environment**: `Node`

**Region**: Choose closest to you

**Branch**: `main`

**Build Command**: `npm install`

**Start Command**: `npm start`

**Instance Type**: `Free`

### 6. Add Environment Variable
Click **Advanced** → **Add Environment Variable**

- **Key**: `MONGODB_URI`
- **Value**: Your MongoDB Atlas connection string
  ```
  mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/hospital
  ```

### 7. Deploy
- Click **Create Web Service**
- Wait 2-3 minutes for deployment
- You'll see: ✅ **Live** with a green dot

### 8. Copy Your Backend URL
Example: `https://hospital-backend-xxxx.onrender.com`

### 9. Test Your API
Open in browser:
- `https://your-url.onrender.com/api/doctors`
- `https://your-url.onrender.com/api/patients`

---

## ✅ Done!

Your backend is now live on Render!

**Next**: Deploy frontend to Vercel and add this backend URL.

---

## 💡 Important Notes:

- Free tier sleeps after 15 min inactivity
- First request after sleep takes ~30 seconds
- Auto-deploys on every GitHub push
- Check logs in Render dashboard if issues occur
