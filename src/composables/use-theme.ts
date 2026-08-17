import { computed, ref } from "vue";

const DARK_THEME_CLASS = "dark";
const THEME_STORAGE_KEY = "theme";

// 初始状态直接读取 html 上的类：首屏脚本已在渲染前恢复主题，无需重复判断。
const isDark = ref(
  document.documentElement.classList.contains(DARK_THEME_CLASS),
);

export function useTheme() {
  const toggleIcon = computed(() => (isDark.value ? "☾" : "☼"));

  function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle(DARK_THEME_CLASS, isDark.value);
    localStorage.setItem(THEME_STORAGE_KEY, isDark.value ? "dark" : "light");
  }

  return { isDark, toggleIcon, toggleTheme };
}
