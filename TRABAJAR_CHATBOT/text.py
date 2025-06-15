from google import genai
import streamlit as st

api_key = st.secrets["GEMINI_API_KEY"]
client = genai.Client(api_key=api_key)

def obtener_respuesta(prompt):
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt
    )
    return response.text