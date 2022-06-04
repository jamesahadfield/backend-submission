# BEFORE YOU BEGIN
Please initialize a Git repository in this folder, with an initial commit that includes just what was included in the zip.

# Generic String Interpolation function in TypeScript

Many companies utilize a headless CMS to manage their content and reduce the overhead of requiring engineers to make simple copy/content changes for static pages. However, at KatKin we are also planning on using these systems for _personalized_ content, i.e. customer's account dashboard and emails. This requires the content to be able to include variables like the customer's name, their cats' name(s), etc. One way of doing this would be to directly place variables in strings, e.g. the following string:

"Hi, $customerFirstName, how is $catName doing today?"

After which, your code is provided the appropriate variable to value mappings to transform it into the final, delivered content. There is however, one big caveat - most content in the headless CMS is structured and stored as JSON, of varying shapes and sizes. For example, your code might receive:

```
{
  "header": "Hey there, $customerFirstName",
  "subheader": "We've got some goodies for $catName!",
  "content": {
    // ....
    "someOtherNestedFields": [
      // .....
    ],
  }
}

```

In other words, your code should work on _any_ type of JSON serializable data, including strings, numbers, nested JSON arrays as well as objects of unknown shape and size. 

Write a function in TypeScript which, given some serializable data and some variable mappings, returns data of the same exact shape, but with all variables inside strings replaced with the mapped values.

Note the following requirements as well:
- The function should also be able to handle strings, booleans, numbers at the root level as well i.e. the input is not always guaranteed to be an object or array.
- The function should not do anything to non-strings, just leave them untouched.
- Keys of objects should NOT be affected, only values.


You are also allowed/encouraged to:
- Write tests for your function. However, if you are not familiar with TypeScript's ecosystem and testing frameworks, you can instead just write (in plain english, or in pseudo-code) what test cases you would have.
- Refer to Google and online resources for information, e.g. if you are unfamiliar or rusty with the language please feel free to refer to the official TypeScript documentation or StackOverflow for help with syntax.
- Self-review your code (either through comments in the code, or a separate README file). We understand this may be a big task for some people (particularly those not previously familiar with TypeScript) - so if you think there are any issues with your solution that you think you would be able to fix given more time or expertise, then write it down. We are not assessing just raw TypeScript skills, but also general self-awareness as a software engineer and the drive for increasing quality.
- Think of your solution as a library that can be imported by our other backend applications.

### Assessment Criteria
- Code readability
- How well-typed your function/library is.
- Tests (or test cases you suggest)
- The code _must_ compile and run in a NodeJS environment.
- We take into consideration your previous experience with TypeScript. If you are not currently using it professionally, we will not be as strict with TypeScript-specific best practices.


We encourage you to take spend around 30-40 minutes on this.

### Submission

To submit your solution, please either:

- Commit all relevant files to Git
- Zip up your folder and email jack@katkin.com
- Upload it to a publically accessible GitHub repository and send a link to the repository to jack@katkin.com. Please use an inconspicuous name, e.g. NOT something like "katkin-backend-test".
