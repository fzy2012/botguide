# 如何贡献 (How to Contribute)

👋 感谢你对 **Botguide** 感兴趣！我们非常欢迎并鼓励社区的贡献。

你的每一次提交，都在帮助打破信息差，让每个人都能更轻松地掌握 OpenClaw 和 AI 智能体技术。无论是修复 Bug、添加新资源、完善文档，还是提出改进建议，我们都十分珍视。

## 🌟 我们可以一起做什么？

我们需要大家共同补充以下内容：

*   **最佳实践案例**: 你是如何在特定场景下使用 OpenClaw 的？
*   **优质教程**: 你发现的或撰写的关于 OpenClaw 的好文章/视频。
*   **实用工具**: 能够提升 OpenClaw 使用效率的插件或脚本。
*   **常见问题解答**: 帮助新手快速避坑的经验分享。

## 🚀 提交指南

### 1. 提交新资源

如果你发现了优质的 OpenClaw 相关资源（教程、案例、工具等），可以通过以下方式提交：

1.  **Fork** 本仓库。
2.  在 `src/data/guides.ts` 文件中添加新的资源条目。请参照现有格式：
    ```typescript
    {
      id: "unique-id", // 可以留空，我们会生成
      name: "资源标题",
      description: "简短描述（50字以内）",
      link: "https://链接地址",
      platform: "来源平台 (如 GitHub, YouTube, 博客)",
      language: "Chinese" | "English",
      type: "类型 (如 Tutorial, Official, Video, Showcase)",
      isFeatured: false,
      topics: ["标签1", "标签2"],
      addedAt: "YYYY-MM-DD"
    }
    ```
3.  提交 Pull Request (PR)，标题格式建议为：`feat(resource): 添加 [资源名称]`。

### 2. 改进代码或文档

1.  **Fork** 本仓库并克隆到本地。
2.  创建一个新的分支：`git checkout -b fix/your-fix-name` 或 `git checkout -b feat/your-feature-name`。
3.  进行修改并提交：`git commit -m "fix: 修复了..."`。
4.  推送到你的远程仓库：`git push origin feat/your-feature-name`。
5.  在 GitHub 上发起 Pull Request。

## 📝 提交规范

为了保持项目的整洁和可维护性，请遵循以下规范：

*   **Commit Message**: 尽量简洁明了，建议使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范（如 `feat`, `fix`, `docs`, `style`, `refactor` 等）。
*   **代码风格**: 项目配置了 ESLint 和 Prettier，提交前请确保代码通过检查。

## 💬 参与讨论

如果你有任何想法、疑问或建议，欢迎在 [GitHub Issues](https://github.com/yourusername/botguide/issues) 中提出。

让我们一起构建最棒的 OpenClaw 指南！🚀
