const completion: Fig.Spec = {
  name: "my-app",
  description: "Tests completions",
  subcommands: [
    {
      name: "test",
      description: "tests things",
      options: [
        {
          name: "--case",
          description: "the case to test",
          isRepeatable: true,
          args: {
            name: "case",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-V", "--version"],
          description: "Print version information",
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
        isVariadic: true,
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help information",
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
    {
      name: ["-c", "-C", "--config", "--conf"],
      description: "some config file",
      isRepeatable: true,
    },
  ],
  args: [
    {
      name: "file",
      isOptional: true,
      template: "filepaths",
    },
    {
      name: "choice",
      isOptional: true,
      suggestions: [
        "first",
        "second",
      ],
    },
  ]
};

export default completion;
