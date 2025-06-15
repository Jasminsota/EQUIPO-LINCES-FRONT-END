import streamlit as st
from tests.text import obtener_respuesta

st.title("ArcaIA Connect")

prompt = st.text_input("Preguntale algo a Gemini")

if st.button("Obtener respuesta"):
    respuesta = obtener_respuesta(prompt)
    st.text(respuesta)
    st.success("Mensaje generado!")

