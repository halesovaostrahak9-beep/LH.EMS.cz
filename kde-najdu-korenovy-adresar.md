# 📁 Kde najdu kořenový adresář?

## 🎯 Rychlá odpověď

**Kořenový adresář** je hlavní složka vašeho projektu - ta, která obsahuje všechny soubory a podsložky.

---

## 📍 Jak kořenový adresář najít?

### Ve webovém editoru (např. VS Code online)
1. **Otevřete si editor** (VS Code, Cursor, atd.)
2. **Vlevo uvidíte panel se soubory** - to je váš kořenový adresář!
3. **Kořenový adresář je ta nejvyšší úroveň**, kde jsou všechny soubory

### V aplikaci VS Code na počítači
1. **File → Open Folder** (Soubor → Otevřít složku)
2. **Vyberte složku s vaším EMS projektem**
3. **Ta složka je váš kořenový adresář**

### V průzkumníku Windows
1. **Najděte složku s vaším projektem** (např. "ems-website" nebo "ems-cvicme")
2. **Dvojklikem ji otevřete**
3. **Uvnitř vidíte soubory jako package.json, vite.config.ts** - to je kořenový adresář!

---

## 🏗️ Struktura vašeho EMS projektu

```
VÁŠ-PROJEKT/ (👈 TOTO JE KOŘENOVÝ ADRESÁŘ)
├── 📄 package.json                  (hlavní konfigurační soubor)
├── 📄 vite.config.ts                (konfigurace Vite)
├── 📄 tailwind.config.js            (konfigurace Tailwind CSS)
├── 📄 tsconfig.json                 (konfigurace TypeScript)
├── 📄 LOGO-NAVOD.md                 👈 NÁVOD PRO LOGO (TADY!)
├── 📄 kde-najdu-korenovy-adresar.md 👈 TENTO SOUBOR
├── 📄 index.html                    (hlavní HTML soubor)
├── 📄 .gitignore                    (Git konfigurace)
├── 📄 vercel.json                   (konfigurace pro Vercel)
├── 📁 src/                          (zdrojové soubory)
│   ├── 📄 main.tsx                  (vstupní bod aplikace)
│   ├── 📄 app.tsx                   (hlavní React komponenta)
│   ├── 📄 index.css                 (globální styly)
│   ├── 📁 components/               (React komponenty)
│   └── 📁 lib/                      (pomocné funkce)
├── 📁 public/                       👈 TADY VLOŽTE LOGO!
│   ├── 📄 logo.png                  (váš logotyp - TADY!)
│   ├── 📄 LOGO-INSTRUKCE.txt        (krátké instrukce)
│   └── 📄 vite.svg                  (výchozí ikona)
└── 📁 node_modules/                 (závislosti - ignorovat)
```

---

## 🔍 Jak poznáte, že jste v kořenovém adresáři?

### ✅ SPRÁVNÉ SIGNÁLY:
- **Vidíte soubor `package.json`** - to je hlavní indikátor!
- **Vidíte složky `src/` a `public/`**
- **Vidíte soubory `vite.config.ts`, `tailwind.config.js`**
- **Vidíte soubor `LOGO-NAVOD.md`**

### ❌ NESPRÁVNÉ - nejste v kořenovém adresáři:
- **Vidíte pouze soubory .tsx, .ts** (jste ve složce src/)
- **Vidíte pouze obrázky** (jste ve složce public/)
- **Nevidíte package.json** (jste v podsložce)

---

## 📂 Praktické tipy pro navigaci

### 1. Ve VS Code
- **Levý panel = kořenový adresář**
- **Klikněte na název projektu nahoře** pro návrat do kořene
- **Pravý klik → Reveal in Explorer** ukáže složku na disku

### 2. V terminálu/příkazové řádce
```bash
# Zkontrolujte, zda jste v kořenovém adresáři
ls -la          # Linux/Mac
dir             # Windows

# Měli byste vidět package.json a další soubory
```

### 3. Rychlé ověření
**Pokud vidíte tyto soubory, jste v kořenovém adresáři:**
- ✅ `package.json`
- ✅ `LOGO-NAVOD.md`
- ✅ složku `public/`
- ✅ složku `src/`

---

## 🎯 Co dělat pro logo?

### Cesta k logoú:
```
VÁŠ-PROJEKT/        👈 KOŘENOVÝ ADRESÁŘ
└── public/         👈 TADY VLOŽTE logo.png
    └── logo.png    👈 VÁŠ LOGOTYP
```

### Kroky:
1. **Najděte kořenový adresář** (tam kde je package.json)
2. **Otevřete složku `public/`**
3. **Vložte váš obrázek s názvem `logo.png`**
4. **Hotovo!** Logo se automaticky zobrazí na webu

---

## ❓ Časté problémy a řešení

### "Nevidím soubor LOGO-NAVOD.md"
- **Řešení:** Nejste v kořenovém adresáři - jděte o úroveň výš
- **Tip:** Hledejte složku s package.json

### "Mám více složek s projekty"
- **Řešení:** Otevřete tu, která obsahuje EMS projekt
- **Poznáte ji podle:** názvu (ems-website, ems-cvicme) nebo obsahu

### "Ve VS Code vidím jiné soubory"
- **Řešení:** File → Open Folder → vyberte správnou složku projektu
- **Nebo:** zavřete VS Code a znovu otevřete správnou složku

---

## 💡 Pro začátečníky

### Co je kořenový adresář?
- **Je to "domov" vašeho projektu**
- **Obsahuje všechny soubory a složky projektu**
- **Když někdo řekne "v kořenovém adresáři", myslí tím hlavní složku**

### Analogie:
- **Kořenový adresář = celý dům**
- **Složky src/, public/ = pokoje v domě**
- **Soubory .tsx, .ts = věci v pokojích**

---

## 📞 Potřebujete pomoc?

**Pokud stále nemůžete najít kořenový adresář:**

1. **Pošlete screenshot** toho, co vidíte v editoru
2. **Popište, jaké soubory vidíte** v hlavním panelu
3. **Zkuste hledat soubor `package.json`** - tam kde je, tam je kořenový adresář

**Tipové otázky pro ověření:**
- ❓ Vidíte soubor `package.json`?
- ❓ Vidíte složky `src/` a `public/`?
- ❓ Vidíte soubor `LOGO-NAVOD.md`?

**Pokud na všechny odpovíte ANO = jste v kořenovém adresáři! 🎉**