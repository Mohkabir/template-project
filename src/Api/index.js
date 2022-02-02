import axios from "axios";

// const API = axios.create({baseURL: "
// https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"});

const url = "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"

export const fetchTemplateApi = () => axios.get(url);

