# nextjs-env-vars

Ejemplo de uso y sobrescritura de valores en variables de entornos en archivos .env.*. En el caso de NextJS y Vercel los archivos soportados son:

1. .env
2. .env.local
3. .env.development
4. .env.development.local
5. .env.production
6. .env.production.local

Como regla general los archivos terminados en **.local** siempre sobrescriben los valores de los archivos **SIN .local**.

## Ejemplo #1

Si una variable se encuentra definida en los siguientes archivos:

1. .env
2. .env.local
3. .env.development
4. .env.development.local

Se mostrará el valor de **.env.development.local**.


## Ejemplo #2

Si una variable se encuentra definida en los siguientes archivos:

1. .env
3. .env.development

Se mostrará el valor de **.env.development**.


## Ejemplo #3

Si una variable se encuentra definida en los siguientes archivos:

1. .env
2. .env.local
3. .env.development

Se mostrará el valor de **.env.local**.
