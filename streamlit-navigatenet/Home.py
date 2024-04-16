import json
import streamlit as st
import requests
from streamlit_lottie import st_lottie

st.set_page_config(
    page_title="Hello",
    page_icon="👋",
)

st.write("# Welcome to NavigateNet! 👋")

st.sidebar.success("Start searching thorugh NavigateNet.")

st.markdown(
    """
    NavigateNet is an open-source search engine built with ElasticSearch and Machine Learning.

    
"""
)


def load_lottieurl(url: str):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()

lottie_hello = load_lottieurl("https://lottie.host/a1819159-0ab8-407d-8d04-fb5feb02993a/YxTyaHa5Ya.json")
lottie_bye = load_lottieurl("https://lottie.host/46c6ec4e-108e-4b55-9574-165d34cff392/9nBzdUPCkx.json")

st_lottie(lottie_hello, speed=1, height=300, key="hello")

st.markdown(
    """
    **👈 Select search from the sidebar** to start searching !
    
"""
)

st.markdown(
    """
    **👈 Stay tuned for more Updates !**
    
"""
)

st_lottie(lottie_bye, speed=1, height=500, key="bye")