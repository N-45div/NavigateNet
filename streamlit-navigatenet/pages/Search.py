import streamlit as st
import streamlit_shadcn_ui as ui


st.title("Search")
st.sidebar.success("Start searching through NavigateNet.")

if "my_input" not in st.session_state:
    st.session_state["my_input"] = ""


choice = ui.select(options=["Research", "Academics", "Fashion"])

st.markdown(f"Current Searching Domain: {choice}")

input_value = ui.input( type='text', placeholder="Enter your Search Query", key="input1")
submit = st.button("Search")

if submit:
    st.session_state["input_value"] = input_value
    st.write("You have entered: ", input_value)